export interface Team {
  team_id: String,
  title: String,
  description: String,
  photo: String,
  owner_stats: {
    name: String,
    username: String,
    email: String,
    photo: String,
    created_at: String
  },
  owner_id: String,
  users_inside: String,
  created_at: String
}

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
  team: Array<Team>
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
