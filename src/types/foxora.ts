export type Locale = "de" | "en";

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

export interface CashbackInput {
  activationFee: number;
  monthlySpend: number;
  cashbackRatePct: number;
  capPct: number;
}

export interface CashbackRow {
  month: number;
  earned: number;
  totalEarned: number;
  pctOfCap: number;
  reached: boolean;
}
