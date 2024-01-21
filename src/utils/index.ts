import {
  clockIcon,
  coinIcon,
  speedIcon,
  usersIcon,
} from '../assets/images/benefits/icons';
import {
  activityImg1,
  activityImg3,
  activityImg4,
} from '../assets/images/features/activities';

import {
  trainer1,
  trainer3,
  trainer5,
} from '../assets/images/features/trainers';

type TNavLink = { name: string; href: string };
export type TFeature = {
  imgUrl: string;
  activityName: string;
  description: string;
  price: number;
  type: 'online' | 'offline';
  star: number;
  activityAmount: number;
  activityDuration: { hr: number; min: number };
  users: number;
  trainer: string;
  trainerImgUrl: string;
};

export const navLinks: TNavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
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

export const benefits = [
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

export const trainers = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Frank',
  'Grace',
  'Harry',
  'Ivy',
  'Helena',
];

export const priceRange = ['$100 - $200', '$200 - $300', '$300 - $400'];

export const features: TFeature[] = [
  {
    imgUrl: activityImg1,
    activityName: 'Yoga',
    description: 'Mindful Movement',
    price: 150,
    type: 'online',
    star: 4.9,
    activityAmount: 12,
    activityDuration: { hr: 1, min: 30 },
    users: 15000,
    trainer: 'Alice',
    trainerImgUrl: trainer5,
  },
  {
    imgUrl: activityImg3,
    activityName: 'Yoga',
    description: 'Mindful Movement',
    price: 150,
    type: 'online',
    star: 4.9,
    activityAmount: 12,
    activityDuration: { hr: 1, min: 30 },
    users: 15000,
    trainer: 'Bob',
    trainerImgUrl: trainer1,
  },
  {
    imgUrl: activityImg4,
    activityName: 'Yoga',
    description: 'Mindful Movement',
    price: 150,
    type: 'online',
    star: 4.9,
    activityAmount: 12,
    activityDuration: { hr: 1, min: 30 },
    users: 15000,
    trainer: 'Helena',
    trainerImgUrl: trainer3,
  },
  {
    imgUrl: activityImg1,
    activityName: 'Yoga',
    description: 'Mindful Movement',
    price: 150,
    type: 'online',
    star: 4.9,
    activityAmount: 12,
    activityDuration: { hr: 1, min: 30 },
    users: 15000,
    trainer: 'Alice',
    trainerImgUrl: trainer5,
  },
  {
    imgUrl: activityImg3,
    activityName: 'Yoga',
    description: 'Mindful Movement',
    price: 150,
    type: 'online',
    star: 4.9,
    activityAmount: 12,
    activityDuration: { hr: 1, min: 30 },
    users: 15000,
    trainer: 'Bob',
    trainerImgUrl: trainer1,
  },
  {
    imgUrl: activityImg4,
    activityName: 'Yoga',
    description: 'Mindful Movement',
    price: 150,
    type: 'online',
    star: 4.9,
    activityAmount: 12,
    activityDuration: { hr: 1, min: 30 },
    users: 15000,
    trainer: 'Helena',
    trainerImgUrl: trainer3,
  },
];
