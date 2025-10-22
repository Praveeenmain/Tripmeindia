export interface PackagePricing {
  category: string;
  pax2: number;
  pax4: number;
  pax6: number;
  pax12: number;
}

export interface DailyPackagePricing {
  sedan: number;
  innova: number;
  innovaCrysta: number;
  tempoTraveller: number;
}

export interface DailyPackageData {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  distance?: string;
  duration?: string;
  pricing: DailyPackagePricing;
  includes?: string[];
  excludes?: string[];
}

export const dailyPackages = [
  {
    id: "airport-railway-transfers",
    title: "Airport & Railway Station Transfers",
    services: [
      {
        id: "tirupati-airport",
        title: "Tirupati airport transfers (one way)",
        pricing: {
          sedan: 1125,
          innova: 1625,
          innovaCrysta: 2125,
          tempoTraveller: 2750
        }
      },
      {
        id: "renigunta-railway",
        title: "Renigunta railway station transfers (one way)",
        pricing: {
          sedan: 938,
          innova: 1375,
          innovaCrysta: 1875,
          tempoTraveller: 2500
        }
      }
    ]
  },
  {
    id: "local-temple-packages",
    title: "Local Temple Sightseeing Packages",
    services: [
      {
        id: "tirupati-local-temples",
        title: "Tirupati Local Temples",
        duration: "4 hours & 40 KMS",
        pricing: {
          sedan: 2250,
          innova: 2875,
          innovaCrysta: 3625,
          tempoTraveller: 4375
        }
      },
      {
        id: "tirupati-tirumala-trip",
        title: "Tirupati Tirumala Trip",
        duration: "5 hrs & 50 KMS",
        pricing: {
          sedan: 2250,
          innova: 2875,
          innovaCrysta: 3750,
          tempoTraveller: 4375
        }
      }
    ]
  },
  {
    id: "extended-pilgrimage",
    title: "Extended Pilgrimage Tours",
    services: [
      {
        id: "srikalahasti-trip",
        title: "Srikalahasti Trip",
        duration: "Up & down 5 hrs & 80 KMS",
        pricing: {
          sedan: 3125,
          innova: 4125,
          innovaCrysta: 4750,
          tempoTraveller: 5875
        }
      },
      {
        id: "srivari-mettu-drop",
        title: "Srivari Mettu Drop",
        description: "Special trekking route access",
        pricing: {
          sedan: 1625,
          innova: 2000,
          innovaCrysta: 2500,
          tempoTraveller: 3500
        }
      }
    ]
  },
  {
    id: "additional-charges",
    title: "Additional Charges & Outstation Rates",
    services: [
      {
        id: "extra-hour",
        title: "Extra Hour",
        pricing: {
          sedan: 188,
          innova: 250,
          innovaCrysta: 313,
          tempoTraveller: 438
        }
      },
      {
        id: "extra-kms",
        title: "Extra Kms",
        pricing: {
          sedan: 18,
          innova: 24,
          innovaCrysta: 28,
          tempoTraveller: 32
        }
      },
      {
        id: "outstation-rates",
        title: "Outstation Rs. / kms",
        description: "Minimum 300 kms per day",
        pricing: {
          sedan: 18,
          innova: 24,
          innovaCrysta: 28,
          tempoTraveller: 32
        }
      }
    ]
  }
];

export const policyInfo = [
  {
    id: "gst-taxes",
    title: "GST & Taxes",
    description: "GST 18% will be additional on total billing"
  },
  {
    id: "ghat-road-policy",
    title: "Ghat Road Policy",
    description: "AC will turn off in ghat roads\nTirupati - Tirumala Ghat roads will close between 12 AM to 3 AM"
  },
  {
    id: "guest-responsibilities",
    title: "Guest Responsibilities",
    description: "Driver allowances, Toll gates and Parking charges has to be pay by the guest\nInterstate permits has to be pay by guest (if applicable)"
  },
  {
    id: "night-travel",
    title: "Night Travel",
    description: "Additional driver batta will be applicable if vehicle drive between 10.30 PM to 6 AM"
  }
];

export interface PackageData {
  id: string;
  title: string;
  duration: string;
  subtitle: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    nightStay?: string;
  }[];
  pricing: PackagePricing[];
  includes: string[];
  excludes: string[];
}

export const packages: PackageData[] = [
  {
    id: "1n2d-tirupati-tirumala",
    title: "Tirupati Tirumala Package",
    duration: "1 Night / 2 Days",
    subtitle: "Essential pilgrimage to Lord Balaji",
    highlights: [
      "Tirumala Balaji Darshan",
      "Special Entry Darshan Tickets",
      "Tirupati Local Temples",
      "AC Accommodation"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tirupati and Tirumala Darshanam",
        description: "On arrival Pick up from Tirupati airport/ railway station transfer to hotel after fresh up proceed to Tirumala. Have a holy dip at Pushkarini visit Sri Varahaswamy temple and Sri Venkateswara swamy (Lord Balaji) temple after darshan back to hotel.",
        nightStay: "Tirupati"
      },
      {
        day: 2,
        title: "Visit Temples in Tirupati",
        description: "After breakfast proceed to visit Sri Padmavathi temple, Sri Govindarajaswamy temple, ISKCON temple and Sri Kapileswaraswamy temple later transfer to Tirupati airport/ railway station."
      }
    ],
    pricing: [
      { category: "Standard", pax2: 7750, pax4: 6000, pax6: 5375, pax12: 5000 },
      { category: "Deluxe", pax2: 8250, pax4: 6625, pax6: 6000, pax12: 5500 },
      { category: "Premium", pax2: 9000, pax4: 7375, pax6: 6750, pax12: 6250 },
      { category: "Luxury", pax2: 10625, pax4: 9000, pax6: 8250, pax12: 7750 }
    ],
    includes: [
      "A.C. Double sharing accommodation with breakfast",
      "Transportation by A.C Sedan/ Innova/ Tempo vehicle",
      "One Time Tirumala Balaji special entry darshan tickets",
      "Fuel charges, Driver rewards, Tollgates, Parking charges"
    ],
    excludes: [
      "Any Air Fare / Train Fare",
      "5% GST",
      "Portage, Laundry, Mineral Water, Telephone Charges",
      "Entrance fees during sightseeing",
      "Any meal other than breakfast"
    ]
  },
  {
    id: "1n2d-tirupati-srikalahasti",
    title: "Tirupati-Tirumala-Srikalahasti",
    duration: "1 Night / 2 Days",
    subtitle: "Pilgrimage with Vayu Linga Darshan",
    highlights: [
      "Tirumala Balaji Darshan",
      "Srikalahasti Temple Visit",
      "Rahu-Kethu Dosha Nivaran",
      "Papavinasanam & Waterfalls"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tirumala Lord Balaji Darshan and Sightseeing",
        description: "Visit Tirumala temples including Sri Venkateswara swamy temple. If time permits visit Papavinasanam, Akasaganga, Japali theertham and Sri Venugopala swamy Temple.",
        nightStay: "Tirupati"
      },
      {
        day: 2,
        title: "Tirupati Local Temples - Srikalahasti",
        description: "Visit Sri Padmavathi temple and Tirupati local temples. Proceed to Srikalahasti to visit Sri Kalahastiswara swamy (Vayu linga - one of Pancha Bhoota Stalas). Significant for Rahu-Kethu dosha nivaran pooja."
      }
    ],
    pricing: [
      { category: "Standard", pax2: 7625, pax4: 6000, pax6: 5500, pax12: 4875 },
      { category: "Deluxe", pax2: 8125, pax4: 6625, pax6: 6125, pax12: 5500 },
      { category: "Premium", pax2: 9000, pax4: 7250, pax6: 6875, pax12: 6125 },
      { category: "Luxury", pax2: 10625, pax4: 9000, pax6: 8750, pax12: 8375 }
    ],
    includes: [
      "A.C. Double sharing accommodation with breakfast",
      "Transportation by A.C vehicle",
      "One Time Tirumala Balaji special entry darshan tickets",
      "Fuel charges, Driver rewards, Tollgates, Parking, Interstate permits"
    ],
    excludes: [
      "Any Air Fare / Train Fare",
      "GST Tax",
      "Portage, Laundry, Mineral Water, Telephone Charges",
      "Entrance fees during sightseeing",
      "Any meal other than breakfast"
    ]
  },
  {
    id: "2n3d-tirupati-srikalahasti",
    title: "Tirupati Tirumala Srikalahasti Package",
    duration: "2 Nights / 3 Days",
    subtitle: "Extended pilgrimage with Trinity Temple",
    highlights: [
      "Tirumala Balaji Darshan",
      "Papavinasanam Waterfalls",
      "Srikalahasti Temple",
      "Gudimallam Trinity Temple"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tirupati Arrival and Temple Visits",
        description: "Visit Sri Padmavathi temple, Sri Govindaraja swamy temple, ISKCON temple and Sri Kapileswara swamy temple.",
        nightStay: "Tirupati"
      },
      {
        day: 2,
        title: "Tirumala Balaji Darshan and Papavinasanam Visits",
        description: "Visit Tirumala temples. If time permits visit Papavinasanam, Akasaganga, Japali theertham and Sri Venugopala swamy Temple.",
        nightStay: "Tirupati"
      },
      {
        day: 3,
        title: "Tirupati-Srikalahasti-Gudimallam Trinity Temple",
        description: "Visit Srikalahasti temples and Gudimallam - the only temple where Trinity (Lord Brahma, Lord Vishnu and Lord Shiva) formed in one Shiva Lingam."
      }
    ],
    pricing: [
      { category: "Standard", pax2: 11250, pax4: 8625, pax6: 7875, pax12: 7125 },
      { category: "Deluxe", pax2: 12875, pax4: 9875, pax6: 9000, pax12: 8375 },
      { category: "Premium", pax2: 14375, pax4: 11375, pax6: 10500, pax12: 9875 },
      { category: "Luxury", pax2: 17500, pax4: 14875, pax6: 14500, pax12: 14125 }
    ],
    includes: [
      "A.C. Double sharing accommodation with breakfast",
      "Transportation by A.C vehicle",
      "One Time Tirumala Balaji special entry darshan tickets",
      "Fuel charges, Driver rewards, Tollgates, Parking, Interstate permits"
    ],
    excludes: [
      "Any Air Fare / Train Fare",
      "GST Tax",
      "Portage, Laundry, Mineral Water, Telephone Charges",
      "Entrance fees during sightseeing",
      "Any meal other than breakfast"
    ]
  },
  {
    id: "2n3d-golden-temple",
    title: "Tirupati-Tirumala-Srikalahasti-Golden Temple",
    duration: "2 Nights / 3 Days",
    subtitle: "Journey through sacred sites",
    highlights: [
      "Kanipakam Ganesh Temple",
      "Golden Temple Sripuram",
      "Tirumala Balaji Darshan",
      "Srikalahasti Vayu Linga"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tirupati Arrival - Kanipakam - Golden Temple",
        description: "Visit Sri Swayambhu Vinayaka swamy temple at Kanipakam. Drive to Sripuram to visit Sri Lakshmi Narayani peetam (Golden Temple) constructed in the shape of Srichakram.",
        nightStay: "Tirupati"
      },
      {
        day: 2,
        title: "Lord Balaji Temple and Tirumala Temples",
        description: "Visit Tirumala temples. If time permits visit Papavinasanam, Akasaganga, Japali theertham and Sri Venugopala swamy Temple.",
        nightStay: "Tirupati"
      },
      {
        day: 3,
        title: "Tirupati Local Temples - Srikalahasti",
        description: "Visit Tirupati local temples and proceed to Srikalahasti for Vayu linga darshan and Rahu-Kethu dosha nivaran pooja."
      }
    ],
    pricing: [
      { category: "Standard", pax2: 13500, pax4: 9750, pax6: 9000, pax12: 7875 },
      { category: "Deluxe", pax2: 14750, pax4: 11125, pax6: 10250, pax12: 9125 },
      { category: "Premium", pax2: 16750, pax4: 12750, pax6: 11750, pax12: 10625 },
      { category: "Luxury", pax2: 20000, pax4: 16250, pax6: 15875, pax12: 14875 }
    ],
    includes: [
      "A.C. Double sharing accommodation with breakfast",
      "Transportation by A.C vehicle",
      "One Time Tirumala Balaji special entry darshan tickets",
      "Fuel charges, Driver rewards, Tollgates, Parking, Interstate permits"
    ],
    excludes: [
      "Any Air Fare / Train Fare",
      "GST Tax",
      "Portage, Laundry, Mineral Water, Telephone Charges",
      "Entrance fees during sightseeing",
      "Any meal other than breakfast"
    ]
  },
  {
    id: "3n4d-extended",
    title: "Tirupati-Tirumala-Srikalahasti-Golden Temple",
    duration: "3 Nights / 4 Days",
    subtitle: "Extended pilgrimage package",
    highlights: [
      "Vakula Mata Temple",
      "Kanipakam & Golden Temple",
      "Tirumala Balaji Darshan",
      "Gudimallam Trinity Temple"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tirupati Arrival and Visit Local Sightseeing",
        description: "Visit Sri Padmavathi temple, Sri Govindaraja swamy temple, ISKCON temple and Sri Kapileswara swamy temple.",
        nightStay: "Tirupati"
      },
      {
        day: 2,
        title: "Vakula Mata Temple - Kanipakam - Golden Temple",
        description: "Visit Sri Vakula mata Temple (mother of Lord Balaji), Kanipakam Vinayaka temple and Golden Temple at Sripuram.",
        nightStay: "Tirupati"
      },
      {
        day: 3,
        title: "Tirumala Balaji Darshan and Papavinasanam Visits",
        description: "Visit Tirumala temples including Papavinasanam, Akasaganga, Japali theertham and Sri Venugopala swamy Temple.",
        nightStay: "Tirupati"
      },
      {
        day: 4,
        title: "Tirupati - Srikalahasti - Gudimallam Trinity Temple",
        description: "Visit Srikalahasti and Gudimallam Trinity Temple where Lord Brahma, Vishnu and Shiva are formed in one Shiva Lingam."
      }
    ],
    pricing: [
      { category: "Standard", pax2: 17000, pax4: 12375, pax6: 11500, pax12: 10125 },
      { category: "Deluxe", pax2: 19250, pax4: 14250, pax6: 13750, pax12: 12375 },
      { category: "Premium", pax2: 21750, pax4: 16500, pax6: 16250, pax12: 15500 },
      { category: "Luxury", pax2: 26250, pax4: 21750, pax6: 21625, pax12: 20750 }
    ],
    includes: [
      "A.C. Double sharing accommodation with breakfast",
      "Transportation by A.C vehicle",
      "One Time Tirumala Balaji special entry darshan tickets",
      "Fuel charges, Driver rewards, Tollgates, Parking, Interstate permits"
    ],
    excludes: [
      "Any Air Fare / Train Fare",
      "GST Tax",
      "Portage, Laundry, Mineral Water, Telephone Charges",
      "Entrance fees during sightseeing",
      "Any meal other than breakfast"
    ]
  },
  {
    id: "4n5d-premium",
    title: "Tirupati-Golden Temple-Arunachalam-Kanchipuram",
    duration: "4 Nights / 5 Days",
    subtitle: "Complete Pancha Bhoota Stalas pilgrimage",
    highlights: [
      "Pancha Bhoota Stalas Coverage",
      "Arunachalam Agni Lingam",
      "Kanchipuram Temples",
      "Golden Temple & Tiruttani"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tirupati Arrival and Tirumala Balaji Darshanam",
        description: "Visit Tirumala temples including optional visits to Papavinasanam, Akasaganga, Japali theertham and Sri Venugopala swamy Temple.",
        nightStay: "Tirupati"
      },
      {
        day: 2,
        title: "Vakula Mata Temple - Golden Temple - Arunachalam",
        description: "Visit Vakula mata Temple, Kanipakam, Golden Temple and drive to Arunachalam (Tiruvannamalai) - Agni linga temple.",
        nightStay: "Arunachalam"
      },
      {
        day: 3,
        title: "Arunachalam - Kanchipuram - Tiruttani Temples",
        description: "Visit Arunachaleswara temple with giri pradakshana. Visit Kanchipuram temples including Kamakshi Amman, Varadaraja Perumal and Ekambareswara (Prithvi element). Visit Tiruttani Subrahmanya temple.",
        nightStay: "Tirupati"
      },
      {
        day: 4,
        title: "Tirupati Arrival and Visit Local Sightseeing",
        description: "Visit Sri Padmavathi temple, Sri Govindaraja swamy temple, ISKCON temple and Sri Kapileswara swamy temple.",
        nightStay: "Tirupati"
      },
      {
        day: 5,
        title: "Tirupati - Srikalahasti - Gudimallam Trinity Temple",
        description: "Visit Srikalahasti (Vayu linga) for Rahu Kethu dosha nivaran pooja and Gudimallam Trinity Temple."
      }
    ],
    pricing: [
      { category: "Standard", pax2: 23750, pax4: 16250, pax6: 15625, pax12: 13625 },
      { category: "Deluxe", pax2: 26250, pax4: 18625, pax6: 18125, pax12: 16250 },
      { category: "Premium", pax2: 29875, pax4: 23625, pax6: 22375, pax12: 21125 }
    ],
    includes: [
      "Transportation by A.C sedan/ Innova/ Tempo traveler",
      "Double sharing accommodation with breakfast",
      "Fuel charges, Driver rewards, Tollgates, Parking",
      "Tamilnadu interstate permits",
      "One Time Tirumala Balaji darshan special entry tickets"
    ],
    excludes: [
      "Any Air Fare / Train Fare",
      "Portage, Laundry, Mineral Water, Telephone Charges",
      "Entrance fees during sightseeing",
      "Any meal other than breakfast",
      "Anything not specifically mentioned in inclusions"
    ]
  }
];
