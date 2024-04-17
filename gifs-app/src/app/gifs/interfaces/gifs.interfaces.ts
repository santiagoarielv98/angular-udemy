export interface SearchResponse {
  data: Gif[];
  meta: Meta;
  pagination: Pagination;
}

export interface Gif {
  type: Type;
  id: string;
  index_id: number;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: Username;
  source: string;
  title: string;
  rating: Rating;
  content_url: string;
  tags: string[];
  featured_tags: string[];
  user_tags: string[];
  source_tld: SourceTLD;
  source_post_url: string;
  source_caption: string;
  is_hidden: number;
  is_removed: number;
  is_community: number;
  is_anonymous: number;
  is_featured: number;
  is_realtime: number;
  is_sticker: number;
  import_datetime: Date;
  trending_datetime: Date | TrendingDatetimeEnum;
  create_datetime: Date;
  update_datetime: Date;
  images: Images;
  user: User;
  analytics_response_payload: string;
  analytics: Analytics;
  has_attribution: boolean;
  alt_text: string;
}

export interface Analytics {
  onload: Onclick;
  onclick: Onclick;
  onsent: Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  original: FixedHeight;
  downsized: The480_WStill;
  downsized_large: The480_WStill;
  downsized_medium: The480_WStill;
  downsized_small: DownsizedSmall;
  downsized_still: The480_WStill;
  fixed_height: FixedHeight;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small: FixedHeight;
  fixed_height_small_still: The480_WStill;
  fixed_height_still: The480_WStill;
  fixed_width: FixedHeight;
  fixed_width_downsampled: FixedHeight;
  fixed_width_small: FixedHeight;
  fixed_width_small_still: The480_WStill;
  fixed_width_still: The480_WStill;
  looping: Looping;
  original_still: The480_WStill;
  original_mp4: DownsizedSmall;
  preview: DownsizedSmall;
  preview_gif: The480_WStill;
  preview_webp: The480_WStill;
  source: The480_WStill;
  '480w_still': The480_WStill;
  hd?: DownsizedSmall;
}

export interface The480_WStill {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface DownsizedSmall {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface FixedHeight {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size: string;
  webp: string;
  frames?: string;
  hash?: string;
}

export interface Looping {
  mp4_size: string;
  mp4: string;
}

export enum Rating {
  G = 'g',
  PG = 'pg',
  PG13 = 'pg-13',
}

export enum SourceTLD {
  Empty = '',
  WWWTwitchTv = 'www.twitch.tv',
}

export enum TrendingDatetimeEnum {
  The00000000000000 = '0000-00-00 00:00:00',
}

export enum Type {
  GIF = 'gif',
}

export interface User {
  id: number;
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: Username;
  display_name: Name;
  name: Name;
  attribution_display_name: Name;
  description: string;
  user_type: UserType;
  facebook_url: string;
  instagram_url: string;
  twitter_url: string;
  twitter: Twitter;
  tumblr_url: string;
  website_url: string;
  website_display_url: WebsiteDisplayURL;
  is_public: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  suppress_chrome: boolean;
}

export enum Name {
  AtitKharel = 'Atit Kharel',
  VALORANTEsports = 'VALORANT Esports',
  Valorant = 'VALORANT',
  Xbox = 'Xbox',
}

export enum Twitter {
  Kharelatit = 'kharelatit',
  ValesportsEmea = 'valesports_emea',
  Valorant = 'valorant',
  Xbox = 'xbox',
}

export enum UserType {
  Partner = 'partner',
}

export enum Username {
  Atitkharel = 'atitkharel',
  Playvalorant = 'playvalorant',
  ValorantEsports = 'Valorant_Esports',
  Xbox = 'xbox',
}

export enum WebsiteDisplayURL {
  AtitkharelCOMNP = 'atitkharel.com.np',
  ValorantesportsCOM = 'valorantesports.com',
  WWWPlayvalorantCOM = 'www.playvalorant.com',
  WWWXboxCOM = 'www.xbox.com',
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
