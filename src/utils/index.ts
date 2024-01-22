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

import {
  anna_lee,
  harry_potter,
  jack_wilson,
  lisa_nguyen,
  mary_jones,
} from '../assets/images/testimonials';

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

export type TTestimonials = {
  userImg: string;
  userName: string;
  title: string;
  comment: string;
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

export const testimonials: TTestimonials[] = [
  {
    userImg: jack_wilson,
    userName: 'Jack Wilson',
    title: 'Satisfied Trainee',
    comment:
      'With Landing folio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.',
  },
  {
    userImg: lisa_nguyen,
    userName: 'Lisa Nguyen',
    title: 'Satisfied Trainee',
    comment:
      'Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Massa massa ultricies mi quis. Scelerisque fermentum dui faucibus in. Morbi tristique senectus et netus et malesuada fames ac.',
  },
  {
    userImg: mary_jones,
    userName: 'Mary Jones',
    title: 'Satisfied Trainee',
    comment:
      'Sed velit dignissim sodales ut eu sem. Ipsum a arcu cursus vitae congue. At auctor urna nunc id cursus metus. Nec tincidunt praesent semper feugiat nibh. Vel facilisis volutpat est velit egestas dui.',
  },
  {
    userImg: harry_potter,
    userName: 'Harry Potter',
    title: 'Satisfied Trainee',
    comment:
      'Adipiscing tristique risus nec feugiat in fermentum posuere. Adipiscing elit pellentesque habitant morbi. Turpis in eu mi bibendum neque egestas congue quisque.',
  },
  {
    userImg: anna_lee,
    userName: 'Anna Lee',
    title: 'Satisfied Trainee',
    comment:
      'Risus sed vulputate odio ut enim blandit. Sapien pellentesque habitant morbi tristique senectus et netus et. Sit amet facilisis magna etiam tempor orci eu.',
  },
];
