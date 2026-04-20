const DEFAULT_SITE_URL = "https://stamprally-two.vercel.app";

function normalizeSiteUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL,
);

export const siteMetadataBase = new URL(siteUrl);
