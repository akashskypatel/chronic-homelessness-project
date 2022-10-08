export interface Hours {
  sunday: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
}

export interface Service {
  service: string;
  serviceId: string;
  differentHours: boolean;
  hours: Hours;
  description: string;
}

export interface Agency {
  id: string;
  name: string;
  address: string;
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
