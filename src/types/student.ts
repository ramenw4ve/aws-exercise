export interface Student {
  id: string;
  name: string;
  email: string;
  major: string;
  gpa: number;
  year: 'Freshman' | 'Sophomore' | 'Junior' | 'Senior';
  status: 'Active' | 'Inactive';
  enrollmentDate: string;
}