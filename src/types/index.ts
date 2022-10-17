export type Ship = {
  name: string;
  url: string;
  image: string;
  active: boolean;
  home_port: string;
  year_built: number;
  type: string;
};

export type ShipsData = {
  ships: Ship[];
};

export type ShipsVars = {
  offset: number;
};
