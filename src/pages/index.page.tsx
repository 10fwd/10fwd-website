import Image from "next/future/image";
import { NextSeo } from "next-seo";
import { type CustomPage } from "@webclient/pages/_app.types";
import { Card } from "@webclient/shared/card/index";
import styles from "./index.module.css";
import logoImage from "../shared/layout/logo.svg";

const Home: CustomPage = () => {
  return (
    <>
      <NextSeo />

      <section className={styles["hero-section"]}>
        <div className={styles["inner"]}>
          <div className={styles["content"]}>
            <Image
              src={logoImage}
              alt="Open Source"
              width="498"
              height="328"
              priority={true}
            />
            <p>
              2015&apos;ten bu yana topluluklar oluşturup, geliştirici
              ekosistemine katkıda bulunmak, topluluğu motive etmek, farkındalık
              aşılamak ve engelleri ortadan kaldırmak için çalışıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className={styles["content-section"]}>
        <div className={styles["inner"]}>
          <div className={styles["cards"]}>
            <Card
              tags={["mecra"]}
              title="opencast.co"
              description="Yazılım geliştirme toplulukları ve araçlarından haber sağlayan platform."
              link="https://opencast.co/"
            />
            <Card
              tags={["mecra"]}
              title="açık-kaynak.org"
              description="Açık kaynak hakkında bilgilendirici içeriklere ve projelere ulaşabileceğiniz bir rehber."
              link="https://acik-kaynak.org/"
            />
            <Card
              tags={["topluluk"]}
              title="Dev İzmir"
              description="İzmir yerel geliştirici topluluğu."
              link="https://devizmir.com/"
            />
            <Card
              tags={["kişisel içerik üretimi"]}
              title="Eser Özvataf YouTube"
              description="Yazılım geliştirme üzerine içerikler üreten YouTube kanalı."
              link="https://youtube.com/EserOzvataf"
            />
            <Card
              tags={["kişisel içerik üretimi"]}
              title="Eser Özvataf Blog"
              description="Yazılım geliştirme üzerine blog içerikleri."
              link="https://eser.dev/"
            />
            <Card
              tags={["iletişim ağı"]}
              title="10fwd Discord"
              description="10forward topluluğunun ortak discord sunucusu."
              link="https://discord.io/10forward"
            />
            <Card
              tags={["iletişim ağı"]}
              title="10fwd Telegram Duyuruları"
              description="10forward genel telegram duyuru kanalı."
              link="https://t.me/tenforward"
            />
            <Card
              tags={["iletişim ağı"]}
              title="Açık Kaynak Geliştirme Telegram Grubu"
              description="Açık kaynak geliştirme üzerine telegram tartışma grubu."
              link="https://t.me/acikkaynak"
            />
            <Card
              tags={["iletişim ağı"]}
              title="Bilim Kurgu ve/veya Fantastik Edebiyat Yazılımcıları"
              description="Bilim-Kurgu/Fantastik Edebiyat'la ilgili yazılımcılar için telegram tartışma grubu."
              link="https://t.me/bilimkurguyazilim"
            />
            <Card
              tags={["iletişim ağı"]}
              title="Kahve Demleyen Yazılımcılar"
              description="Kahve ile ilgili yazılımcılar için telegram tartışma grubu."
              link="https://t.me/kahveciyazilimcilar"
            />
            <Card
              tags={["iletişim ağı"]}
              title="İçki Tadan Yazılımcılar"
              description="Alkollü içkiler ile ilgili yazılımcılar için telegram tartışma grubu."
              link="https://t.me/ickiyazilim"
            />
            <Card
              tags={["iletişim ağı"]}
              title="Oyuncu Yazılımcılar"
              description="Oyun oynayan yazılımcılar için telegram tartışma grubu."
              link="https://t.me/oyunyazilim"
            />
            <Card
              tags={["iletişim ağı"]}
              title="Fotoğraf Çeken Yazılımcılar"
              description="Fotoğrafla ilgili yazılımcılar için telegram tartışma grubu."
              link="https://t.me/fotoyazilim"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export { Home, Home as default };
