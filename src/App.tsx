import React from 'react';
import StudentTable from './components/StudentTable';
import ThemeToggle from './components/ThemeToggle';
import { studentsData } from './data/students';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const totalStudents = studentsData.length;
  const { isDark } = useTheme();

  return (
    <div className={`
      min-h-screen transition-all duration-500 ease-in-out
      ${isDark 
        ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800' 
        : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }
    `}>
      <div className="container mx-auto px-4 py-8">
        {/* Theme Toggle */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`
            text-4xl font-bold mb-4 transition-colors duration-300
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            Student Management System
          </h1>
          <p className={`
            text-lg max-w-2xl mx-auto transition-colors duration-300
            ${isDark ? 'text-gray-300' : 'text-gray-600'}
          `}>
            Comprehensive overview of student data including academic performance, enrollment status, and demographic information
          </p>
        </div>

        {/* Student Table */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className={`
              text-2xl font-bold transition-colors duration-300
              ${isDark ? 'text-white' : 'text-gray-900'}
            `}>
              Student Directory
            </h2>
            <div className={`
              flex items-center gap-2 text-sm transition-colors duration-300
              ${isDark ? 'text-gray-400' : 'text-gray-600'}
            `}>
              <span>Showing {totalStudents} students</span>
            </div>
          </div>
          <StudentTable students={studentsData} />
        </div>

        {/* Footer */}
        <div className={`
          text-center text-sm transition-colors duration-300
          ${isDark ? 'text-gray-400' : 'text-gray-500'}
        `}>
          <p>© 2024 University Student Management System. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;