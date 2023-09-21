export interface User {
  created_at: String,
  email: String,
  email_verified: Number,
  id: Number,
  last_join: String,
  name: String,
  token: String,
  user_id: String,
  username: String,
  photo: String,
}

export interface Login {
  username: String,
  password: String
}

export interface RootState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}
