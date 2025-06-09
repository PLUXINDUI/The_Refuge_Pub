import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Clock, Users, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "@/components/ui/use-toast";
import { useTables, useAddReservation } from "@/hooks/useDatabase";
import { supabase } from "@/integrations/supabase/client";
import { Table } from "@/models/types";

// Доступные временные слоты
const TIME_SLOTS = ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];

const Reservations = () => {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [partySize, setPartySize] = useState(2);
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState<any>(null);
  
  const navigate = useNavigate();

  // Получаем данные о столах из базы данных
  const {
    data: tables = [],
    isLoading: tablesLoading
  } = useTables();
  const addReservation = useAddReservation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Проверяем аутентификацию
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast({
          title: "Необходима авторизация",
          description: "Пожалуйста, войдите в систему для бронирования столов",
          variant: "destructive",
        });
        navigate('/login');
        return;
      }
      setUser(session.user);
    };
    
    checkAuth();
  }, [navigate]);

  const handleTableSelect = (id: number) => {
    const table = tables.find((t: Table) => t.id === id);
    if (table && table.status === 'reserved') {
      toast({
        title: "Стол недоступен",
        description: `${table.name} уже зарезервирован на это время.`,
        variant: "destructive"
      });
      return;
    }
    setSelectedTable(id);
  };

  const handleTimeSelect = (selected: string) => {
    setTime(selected);
  };

  const handlePartySizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPartySize(parseInt(e.target.value));
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    if (!user) {
      toast({
        title: "Необходима авторизация",
        description: "Пожалуйста, войдите в систему для бронирования столов",
        variant: "destructive"
      });
      navigate('/login');
      return;
    }

    if (!selectedTable || !date || !time) {
      toast({
        title: "Неполная бронь",
        description: "Пожалуйста, выберите стол, дату и время для вашего бронирования.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const reservationData = {
      user_id: user.id,
      table_id: selectedTable,
      date: format(date, 'yyyy-MM-dd'),
      time,
      party_size: partySize,
      note,
      status: 'confirmed' as const,
    };

    addReservation.mutate(reservationData, {
      onSuccess: () => {
        toast({
          title: "Бронирование подтверждено!",
          description: `Ваш стол зарезервирован на ${format(date, 'd MMMM yyyy', {
            locale: ru
          })} в ${time}.`
        });

        setSelectedTable(null);
        setTime(null);
        setNote('');
        setIsSubmitting(false);
      },
      onError: error => {
        console.error("Ошибка при бронировании:", error);
        toast({
          title: "Ошибка бронирования",
          description: "Произошла ошибка при бронировании стола. Пожалуйста, попробуйте еще раз.",
          variant: "destructive"
        });
        setIsSubmitting(false);
      }
    });
  };

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pub-green"></div>
    </div>;
  }

  return (
    <div className="page-transition pt-24 bg-zinc-400">
      {/* Заголовок бронирования */}
      <section className="bg-menu bg-cover bg-center py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="heading-xl text-white mb-6">
              Забронировать <span className="text-pub-green">Стол</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Закрепите за собой место в пабе "Убежище" для незабываемого ужина.
            </p>
          </div>
        </div>
      </section>

      {/* Секция формы бронирования */}
      <section className="section-padding bg-zinc-400">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Левая колонка - Детали бронирования */}
              <div className="md:col-span-1 animate-fade-up" style={{
              animationDelay: '0.2s'
            }}>
                <div className="rounded-xl shadow-lg p-6 border border-border sticky top-24 bg-zinc-400">
                  <h2 className="text-2xl font-playfair font-semibold mb-6">Детали бронирования</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium">Дата</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "d MMMM yyyy", {locale: ru}) : <span>Выберите дату</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white dark:bg-pub-dark" align="start">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus disabled={date => date < new Date()} className={cn("p-3 pointer-events-auto")} locale={ru} />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium">Время</label>
                      <div className="grid grid-cols-2 gap-2">
                        {TIME_SLOTS.map(slot => 
                          <Button key={slot} variant="outline" className={cn("justify-start text-left font-normal h-9", time === slot && "bg-pub-green text-white hover:bg-pub-green hover:text-white")} onClick={() => handleTimeSelect(slot)}>
                            <Clock className="mr-2 h-4 w-4" />
                            {slot}
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="partySize" className="block mb-2 text-sm font-medium">Количество гостей</label>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-pub-green" />
                        <select id="partySize" value={partySize} onChange={handlePartySizeChange} className="input-field">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => 
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'человек' : num >= 2 && num <= 4 ? 'человека' : 'человек'}
                            </option>
                          )}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="note" className="block mb-2 text-sm font-medium">Особые пожелания (необязательно)</label>
                      <textarea id="note" value={note} onChange={handleNoteChange} rows={3} className="input-field resize-none" placeholder="Особые пожелания или диетические требования?"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Правая колонка - Выбор стола */}
              <div className="md:col-span-2 animate-fade-up" style={{
              animationDelay: '0.4s'
            }}>
                <div className="rounded-xl shadow-lg p-6 border border-border mb-8 bg-zinc-400">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-playfair font-semibold">Выберите стол</h2>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-500/20 border border-green-500 rounded-full mr-2"></div>
                        <span className="text-sm">Доступен</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-500/20 border border-red-500 rounded-full mr-2"></div>
                        <span className="text-sm">Занят</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Карта столов */}
                  <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 mb-6 relative min-h-[400px] bg-zinc-400">
                    
                    
                    {/* Барная стойка */}
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-pub-wood rounded-lg flex items-center justify-center">
                      <span className="text-white font-medium">Бар</span>
                    </div>
                    
                    {/* Столы */}
                    <div className="mt-32 grid grid-cols-3 gap-8">
                      {tablesLoading ? 
                        <div className="col-span-3 text-center py-12">Загрузка столов...</div> : 
                        tables.map((table: Table) => 
                          <div key={table.id} className={cn("aspect-square rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative", table.status === 'available' ? "bg-green-500/10 border-green-500/30 hover:border-green-500" : "bg-red-500/10 border-red-500/30", selectedTable === table.id && table.status === 'available' && "border-pub-green bg-pub-green/10")} onClick={() => handleTableSelect(table.id)}>
                            <span className="font-medium">{table.name}</span>
                            <span className="text-sm text-muted-foreground">{table.capacity} {table.capacity === 1 ? 'место' : table.capacity >= 2 && table.capacity <= 4 ? 'места' : 'мест'}</span>
                            {selectedTable === table.id && table.status === 'available' && 
                              <div className="absolute -top-2 -right-2 bg-pub-green text-white p-1 rounded-full">
                                <Check className="h-4 w-4" />
                              </div>
                            }
                          </div>
                        )
                      }
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="btn-primary" onClick={handleSubmit} disabled={!selectedTable || !date || !time || isSubmitting || addReservation.isPending}>
                      {isSubmitting || addReservation.isPending ? 
                        <span className="animate-pulse">Обработка...</span> : 
                        "Подтвердить бронирование"
                      }
                    </Button>
                  </div>
                </div>
                
                <div className="bg-pub-green/10 rounded-xl p-6 border border-pub-green/30">
                  <h3 className="text-xl font-playfair font-semibold mb-4">Правила бронирования</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="bg-pub-green text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                      <span>Бронирование можно сделать за 30 дней до желаемой даты.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pub-green text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                      <span>Для групп более 10 человек, пожалуйста, позвоните нам по телефону +7 926 533-29-93.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pub-green text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                      <span>Ваш стол будет зарезервирован на 15 минут после указанного времени.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pub-green text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                      <span>Для отмены или изменения бронирования, пожалуйста, свяжитесь с нами минимум за 4 часа.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
