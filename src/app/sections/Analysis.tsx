import SectionContainer from "../components/SectionContainer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from 'recharts';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const overallMetricsData = [
  {
    name: 'mAP@50',
    'CN1': 57.6,
    'CN4': 65.4,
    'CN5': 68.3,
  },
  {
    name: 'Precision',
    'CN1': 51.9,
    'CN4': 68.6,
    'CN5': 72.4,
  },
  {
    name: 'Recall',
    'CN1': 60.6,
    'CN4': 53.0,
    'CN5': 62.3,
  },
];

const objectClassData = [
  { class: 'all', 'CN1': 52.0, 'CN4': 56.0, 'CN5': 70.0 },
  { class: 'bench', 'CN1': 51.0, 'CN4': 71.0, 'CN5': 79.0 },
  { class: 'bin', 'CN1': 45.0, 'CN4': 66.0, 'CN5': 69.0 },
  { class: 'bus', 'CN1': 69.0, 'CN4': 69.0, 'CN5': 78.0 },
  { class: 'car', 'CN1': 95.0, 'CN4': 94.0, 'CN5': 94.0 },
  { class: 'cone', 'CN1': 51.0, 'CN4': 60.0, 'CN5': 73.0 },
  { class: 'crosswalk', 'CN1': 72.0, 'CN4': 82.0, 'CN5': 79.0 },
  { class: 'motorbike', 'CN1': 96.0, 'CN4': 87.0, 'CN5': 100.0 },
  { class: 'person', 'CN1': 94.0, 'CN4': 93.0, 'CN5': 92.0 },
  { class: 'pole', 'CN1': 21.0, 'CN4': 38.0, 'CN5': 37.0 },
  { class: 'ramp', 'CN1': 20.0, 'CN4': 48.0, 'CN5': 26.0 },
  { class: 'stairs', 'CN1': 40.0, 'CN4': 71.0, 'CN5': 77.0 },
  { class: 'stop sign', 'CN1': 100.0, 'CN4': 64.0, 'CN5': 67.0 },
  { class: 'tree body', 'CN1': 22.0, 'CN4': 39.0, 'CN5': 47.0 }
];

const Analysis = () => {
  const overallMetricsRef = useRef<HTMLDivElement>(null);
  const objectClassesRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

  const exportToImage = async (elementRef: React.RefObject<HTMLDivElement | null>, fileName: string) => {
    const element = elementRef.current;
    if (!element) return;

    try {
      // Create a clone of the element for export
      const clone = element.cloneNode(true) as HTMLDivElement;
      clone.style.backgroundColor = '#ffffff';
      clone.style.position = 'absolute';
      clone.style.left = '-9999px';
      document.body.appendChild(clone);

      const canvas = await html2canvas(clone, {
        backgroundColor: '#ffffff',
        scale: 2, // Higher quality
      });
      
      document.body.removeChild(clone);

      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Error exporting chart:', err);
    }
  };

  return (
    <SectionContainer>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 text-center">
        Analysis
      </h2>
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Left Column - Overall Metrics */}
          <div className={`lg:col-span-4 bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm relative ${isMobile ? 'h-[300px]' : isTablet ? 'h-[400px]' : 'h-[500px]'}`} ref={overallMetricsRef}>
            <div className="flex justify-between items-center mb-2 md:mb-4">
              <h3 className="text-sm md:text-base font-semibold text-[#60A5FA]">Overall Performance</h3>
              <button 
                onClick={() => exportToImage(overallMetricsRef, 'overall-metrics')}
                className="px-2 py-1 text-xs bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-md transition-colors"
              >
                Export
              </button>
            </div>
            <div className="h-[calc(100%-2rem)]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={overallMetricsData} barSize={isMobile ? 8 : 12}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" strokeWidth={0.3} />
                  <XAxis dataKey="name" stroke="#9CA3AF" fontSize={isMobile ? 8 : 10} />
                  <YAxis stroke="#9CA3AF" fontSize={isMobile ? 8 : 10} width={20} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.8)',
                      border: 'none',
                      borderRadius: '4px',
                      color: '#fff',
                      fontSize: isMobile ? '8px' : '10px',
                      padding: '2px'
                    }}
                  />
                  <Legend wrapperStyle={{fontSize: isMobile ? '8px' : '10px'}} />
                  <Bar dataKey="CN1" name="Navigator 1" fill="#3B82F6" />
                  <Bar dataKey="CN4" name="Navigator 4" fill="#A855F7" />
                  <Bar dataKey="CN5" name="Navigator 5" fill="#EC4899" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Column - Object Classes */}
          <div className={`lg:col-span-8 bg-white/10 p-3 md:p-4 rounded-lg backdrop-blur-sm relative ${isMobile ? 'h-[400px]' : isTablet ? 'h-[500px]' : 'h-[500px]'}`} ref={objectClassesRef}>
            <div className="flex justify-between items-center mb-2 md:mb-4">
              <h3 className="text-sm md:text-base font-semibold text-[#60A5FA]">Object Class Detection Accuracy</h3>
              <button 
                onClick={() => exportToImage(objectClassesRef, 'object-classes')}
                className="px-2 py-1 text-xs bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-md transition-colors"
              >
                Export
              </button>
            </div>
            <div className="h-[calc(100%-1rem)]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={objectClassData} 
                  layout="vertical"
                  margin={{ 
                    top: 0, 
                    right: isMobile ? 10 : 20, 
                    left: isMobile ? 40 : 50, 
                    bottom: 0 
                  }}
                  barSize={isMobile ? 3 : 4}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" strokeWidth={0.3} />
                  <XAxis type="number" domain={[0, 100]} stroke="#9CA3AF" fontSize={isMobile ? 8 : 10} tickCount={isMobile ? 4 : 6} />
                  <YAxis dataKey="class" type="category" stroke="#9CA3AF" fontSize={isMobile ? 8 : 10} width={isMobile ? 40 : 50} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.8)',
                      border: 'none',
                      borderRadius: '4px',
                      color: '#fff',
                      fontSize: isMobile ? '8px' : '10px',
                      padding: '2px'
                    }}
                  />
                  <Legend wrapperStyle={{fontSize: isMobile ? '8px' : '10px'}} />
                  <Bar dataKey="CN1" name="Navigator 1" fill="#3B82F6" />
                  <Bar dataKey="CN4" name="Navigator 4" fill="#A855F7" />
                  <Bar dataKey="CN5" name="Navigator 5" fill="#EC4899" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Analysis; 