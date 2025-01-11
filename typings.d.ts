import { Image } from "sanity";

type SanityBase = {
  _createdAt: string; 
  _id: string; 
  _rev: string; 
  _updatedAt: string; 
}

interface Header extends SanityBase{
  _type: 'hero'; 
  title: string; 
  tString: string;
  bString: string; 
  desc: string; 
}

interface About extends SanityBase{
  _type: 'about'; 
  title: string; 
  desc: string; 
  image: Image; 
  spareImage: Image; 
}