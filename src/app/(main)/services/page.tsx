import { Metadata } from 'next';
import ServicesClient from './Services-client';

export const metadata: Metadata = {
  title: 'Services | SharpLook Barber',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
