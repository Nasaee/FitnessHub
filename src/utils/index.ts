import {
  clockIcon,
  coinIcon,
  speedIcon,
  usersIcon,
} from '../assets/images/features/icons';

type TNavLink = { name: string; href: string };

export const navLinks: TNavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#demo' },
  { name: 'About Us', href: '#about' },
  { name: 'Testimonial', href: '#testimonial' },
  { name: 'Blog', href: '#blog' },
];

export const activities = [
  'Yoga',
  'GYM',
  'Swimming',
  'Running',
  'Gosiphing',
  'Cycling',
  'Hiking',
  'Dancing',
];

export const features = [
  {
    icon: clockIcon,
    title: 'Time Efficiency',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    icon: usersIcon,
    title: 'Personalized Workouts',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    icon: coinIcon,
    title: 'Cost Savings',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    icon: speedIcon,
    title: 'Fast And Accurate',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
];
