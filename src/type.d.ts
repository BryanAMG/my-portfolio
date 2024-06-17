export interface Language {
  label: string,
  color: string,
  icon: IconType
}

export interface Project {
  name: string
  description: string
  languages: Language[],
  source_code_link: string,
  webpage_link: string
}

export interface Social {
  name: string;
  url: string;
  icon: IconType;
}