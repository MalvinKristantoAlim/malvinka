export interface PortfolioData {
  profileImage: string | null;
  anomaniImage: string | null;
  raiseImage: string | null;
}

export type ImageKey = keyof PortfolioData;
