import { Injectable } from '@angular/core';
import { CreditEntry } from '../models/credit-entry.models';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  creditEntries: CreditEntry[] = [
   {
    type: "images",
    page: "landing-page",
    name: "The Milky Way panorama",
    copyright: "ESO/S. Brunier",
    link: "https://www.eso.org/public/images/eso0932a/",
   },
   {
    type: "images",
    page: "celestial-portal",
    name: "Cosmic pearl",
    copyright: "NASA/ESA–T. Pesquet",
    link: "https://www.esa.int/ESA_Multimedia/Search?SearchText=cosmic+pearl&result_type=images",
   },
   {
    type: "images",
    page: "celestial-portal",
    name: "VISTA observing the sky",
    copyright: "Y. Beletsky (LCO)/ESO",
    link: "https://www.eso.org/public/images/beletsky_paranal_05f/",
   },
   {
    type: "images",
    page: "celestial-portal",
    name: "One million stars — towards the dark heart of the Milky Way",
    copyright: "ESO/VISTA. Acknowledgment: Cambridge Astronomical Survey Unit",
    link: "https://www.eso.org/public/images/eso0949b/",
   },
   {
    type: "api",
    page: "iss-explorer",
    name: "Where is the iss at ?",
    link: "https://wheretheiss.at/",
   },
   {
    type: "api",
    page: "iss-explorer",
    name: "Open Notify",
    link: "http://open-notify.org/",
   },
   {
    type: "api",
    page: "telescope-hub",
    name: "'Le Système Solaire'",
    link: "https://api.le-systeme-solaire.net/",
   },
   {
    type: "api",
    page: "cosmic-carousel",
    name: "NASA APIs",
    link: "https://api.nasa.gov/",
   },
  ];

  getAllCreditEntries(): CreditEntry[] {
    return this.creditEntries;
  }


}