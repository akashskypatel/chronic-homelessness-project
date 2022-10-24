export interface Hours {
  sunday: string | null;
  monday: string | null;
  tuesday: string | null;
  wednesday: string | null;
  thursday: string | null;
  friday: string | null;
  saturday: string | null;
}

export interface Service {
  enabled: boolean
  service: string;
  serviceId: string;
  differentHours: boolean;
  hours: Hours;
  description: string | null;
}

export interface Agency {
  id: string;
  name: string;
  address: string;
  geocode?: {
    lat?: number;
    lng?: number;
  }
  contactPhone: string;
  website: string;
  publicContactEmail: string;
  cityContactEmail: string; //only visible to the city
  hours: Hours;
  services: string[];
  dateCreated: Date; //DateTime
  dateUpdated: Date; //DateTime
  dateLastEmailed: Date; //DateTime
  active: boolean;
  servicesInfo: Service[];
}

export interface ServiceCategory {
  id: string;
  name: string;
}
