import raw from "@/data/content.json";

export type Post = {
  id: string;
  shortcode?: string;
  caption: string;
  date?: string;
  type: "image" | "video";
  media: string;
  poster?: string | null;
};

export type Content = {
  profile: {
    username: string;
    fullName: string;
    bio: string;
    avatar: string | null;
  };
  posts: Post[];
};

export const content = raw as unknown as Content;
