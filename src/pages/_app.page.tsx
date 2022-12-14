import { DefaultSeo } from "next-seo";
import { type CustomAppProps } from "./_app.types";
import { Layout } from "@webclient/shared/layout/index";
import { defaults } from "@webclient/shared/defaults";
import { auth } from "@webclient/services/auth/index";
import "@webclient/shared/globals.css";

auth.init();

const CustomApp = (appProps: CustomAppProps) => {
  return (
    <Layout appProps={appProps}>
      <DefaultSeo
        titleTemplate={`${defaults.siteName} - %s`}
        defaultTitle={defaults.siteName}
        openGraph={{
          type: "website",
          locale: defaults.locale,
          url: defaults.webSiteUrl,
          site_name: defaults.siteName,
        }}
        twitter={{
          // handle: defaults.creatorTwitterHandle,
          site: defaults.twitterHandle,
          cardType: "summary_large_image",
        }}
      />
      <appProps.Component {...appProps.pageProps} />
    </Layout>
  );
};

export { CustomApp, CustomApp as default };
