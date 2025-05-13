import SectionContainer from "../components/SectionContainer";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { name: 'Jan', value: 90 },
  { name: 'Feb', value: 85 },
  { name: 'Mar', value: 95 },
  { name: 'Apr', value: 88 },
  { name: 'May', value: 92 },
];

const usabilityData = [
  { name: 'Week 1', value: 75 },
  { name: 'Week 2', value: 82 },
  { name: 'Week 3', value: 88 },
  { name: 'Week 4', value: 95 },
];

const limitationsData = [
  { name: 'Camera', value: 85 },
  { name: 'Internet', value: 75 },
  { name: 'Indoor Nav', value: 45 },
  { name: 'Accuracy', value: 90 },
];

const Analysis = () => {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Analysis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Performance */}
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-blue-400 mb-3">Performance</h3>
          <p className="text-gray-300 mb-4">
            YOLOv8 achieved high FPS and reliable detection, though accuracy decreased in low-light conditions.
          </p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.8)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Usability */}
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-purple-400 mb-3">Usability</h3>
          <p className="text-gray-300 mb-4">
            The single-tap interaction model (tap-to-speak) was found intuitive, especially when paired with voice feedback.
          </p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={usabilityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.8)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Area type="monotone" dataKey="value" stroke="#A855F7" fill="#A855F7" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Limitations */}
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-pink-400 mb-3">Limitations</h3>
          <p className="text-gray-300 mb-4">
            The app depends on camera visibility and sufficient internet connectivity. Indoor localization was not implemented, 
            limiting full navigation support.
          </p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={limitationsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.8)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="value" fill="#EC4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Analysis; 