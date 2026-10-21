import { site } from "@/data/site";
import { siteUrl } from "@/lib/seo";

// Data terstruktur (JSON-LD) agar mesin pencari memahami situs ini sebagai
// organisasi di Semarang. Hanya memuat data yang sudah ada di data/site.ts;
// tambahkan telephone, geo, dan openingHours setelah datanya tersedia.
export function StructuredData() {
  const { location, instagram } = site;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        description: site.description,
        inLanguage: "id-ID",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: site.name,
        alternateName: site.shortName,
        url: siteUrl,
        description: site.description,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/bank-sampah-logo.png`,
          width: 512,
          height: 512,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: location.street,
          addressLocality: location.locality,
          addressRegion: location.region,
          addressCountry: "ID",
        },
        areaServed: site.area,
        sameAs: [instagram.url],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // "<" di-escape agar teks dari data/ tidak bisa menutup tag script.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
