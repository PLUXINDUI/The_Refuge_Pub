
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Clock, Users, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "@/components/ui/use-toast";

// Mock table data
const TABLES = [
  { id: 1, name: 'Table 1', capacity: 2, position: { x: 10, y: 10 }, status: 'available' },
  { id: 2, name: 'Table 2', capacity: 2, position: { x: 60, y: 10 }, status: 'available' },
  { id: 3, name: 'Table 3', capacity: 4, position: { x: 10, y: 50 }, status: 'available' },
  { id: 4, name: 'Table 4', capacity: 4, position: { x: 60, y: 50 }, status: 'reserved' },
  { id: 5, name: 'Table 5', capacity: 6, position: { x: 30, y: 80 }, status: 'available' },
  { id: 6, name: 'Table 6', capacity: 8, position: { x: 80, y: 80 }, status: 'available' },
];

// Available time slots
const TIME_SLOTS = [
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', 
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM'
];

const Reservations = () => {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [partySize, setPartySize] = useState(2);
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tables, setTables] = useState(TABLES);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTableSelect = (id: number) => {
    // Don't allow selection of reserved tables
    const table = tables.find(t => t.id === id);
    if (table && table.status === 'reserved') {
      toast({
        title: "Table Not Available",
        description: `${table.name} is already reserved for this time.`,
        variant: "destructive",
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
    if (!selectedTable || !date || !time) {
      toast({
        title: "Incomplete Reservation",
        description: "Please select a table, date, and time for your reservation.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Mock reservation data to be saved to the database
    const reservationData = {
      table_id: selectedTable,
      date: format(date, 'yyyy-MM-dd'),
      time,
      party_size: partySize,
      note,
      status: 'confirmed',
      created_at: new Date().toISOString()
    };
    
    // In a real implementation, this would be saved to your database
    console.log('Reservation data:', reservationData);
    
    // Simulate successful reservation
    setTimeout(() => {
      toast({
        title: "Reservation Confirmed!",
        description: `Your table is reserved for ${format(date, 'MMMM d, yyyy')} at ${time}.`,
      });
      
      // Update table status in our local state
      setTables(prev => prev.map(table => 
        table.id === selectedTable ? { ...table, status: 'reserved' } : table
      ));
      
      // Reset form
      setSelectedTable(null);
      setTime(null);
      setNote('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="page-transition pt-24">
      {/* Reservations Hero */}
      <section className="bg-menu bg-cover bg-center py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="heading-xl text-white mb-6">
              Reserve a <span className="text-pub-gold">Table</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Secure your spot at The Refuge Pub for a memorable dining experience.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Reservation Details */}
              <div className="md:col-span-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white rounded-xl shadow-lg p-6 border border-border sticky top-24">
                  <h2 className="text-2xl font-playfair font-semibold mb-6">Reservation Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Date
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Select a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Time
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {TIME_SLOTS.map((slot) => (
                          <Button
                            key={slot}
                            variant="outline"
                            className={cn(
                              "justify-start text-left font-normal h-9",
                              time === slot && "bg-pub-gold text-white hover:bg-pub-gold hover:text-white"
                            )}
                            onClick={() => handleTimeSelect(slot)}
                          >
                            <Clock className="mr-2 h-4 w-4" />
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="partySize" className="block mb-2 text-sm font-medium">
                        Party Size
                      </label>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-pub-gold" />
                        <select
                          id="partySize"
                          value={partySize}
                          onChange={handlePartySizeChange}
                          className="input-field"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'person' : 'people'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="note" className="block mb-2 text-sm font-medium">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="note"
                        value={note}
                        onChange={handleNoteChange}
                        rows={3}
                        className="input-field resize-none"
                        placeholder="Any special requests or dietary requirements?"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Table Selection */}
              <div className="md:col-span-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-white rounded-xl shadow-lg p-6 border border-border mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-playfair font-semibold">Select a Table</h2>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-green-500/20 border border-green-500 rounded-full mr-2"></div>
                        <span className="text-sm">Available</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-red-500/20 border border-red-500 rounded-full mr-2"></div>
                        <span className="text-sm">Reserved</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Table Map */}
                  <div className="border border-dashed border-gray-300 rounded-lg p-6 mb-6 relative bg-gray-50 min-h-[400px]">
                    <div className="absolute top-4 left-4 p-2 bg-pub-gold/10 rounded text-sm">
                      <span className="font-medium">Pub Layout</span>
                    </div>
                    
                    {/* Bar Area */}
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3/4 h-16 bg-pub-wood rounded-lg flex items-center justify-center">
                      <span className="text-white font-medium">Bar</span>
                    </div>
                    
                    {/* Tables */}
                    <div className="mt-32 grid grid-cols-3 gap-8">
                      {tables.map((table) => (
                        <div
                          key={table.id}
                          className={cn(
                            "aspect-square rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all duration-300",
                            table.status === 'available' 
                              ? "bg-green-500/10 border-green-500/30 hover:border-green-500" 
                              : "bg-red-500/10 border-red-500/30",
                            selectedTable === table.id && table.status === 'available' && "border-pub-gold bg-pub-gold/10"
                          )}
                          onClick={() => handleTableSelect(table.id)}
                        >
                          <span className="font-medium">{table.name}</span>
                          <span className="text-sm text-muted-foreground">{table.capacity} seats</span>
                          {selectedTable === table.id && table.status === 'available' && (
                            <div className="absolute -top-2 -right-2 bg-pub-gold text-white p-1 rounded-full">
                              <Check className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                      className="btn-primary"
                      onClick={handleSubmit}
                      disabled={!selectedTable || !date || !time || isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Processing...</span>
                      ) : (
                        "Confirm Reservation"
                      )}
                    </Button>
                  </div>
                </div>
                
                <div className="bg-pub-gold/10 rounded-xl p-6 border border-pub-gold/30">
                  <h3 className="text-xl font-playfair font-semibold mb-4">Reservation Policy</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="bg-pub-gold text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                      <span>Reservations can be made up to 30 days in advance.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pub-gold text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                      <span>For parties larger than 10, please call us directly at +1 (303) 555-6789.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pub-gold text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                      <span>Your table will be held for 15 minutes after your reservation time.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pub-gold text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                      <span>To cancel or modify a reservation, please contact us at least 4 hours in advance.</span>
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
