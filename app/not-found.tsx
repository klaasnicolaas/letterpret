import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="flex flex-1 items-center justify-center py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          {/* Grote 404 */}
          <div className="relative mb-6 inline-block">
            <span className="select-none text-[8rem] font-extrabold leading-none tracking-tight text-primary-100 dark:text-primary-900/50 sm:text-[10rem]">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 dark:bg-primary-900/40">
                <BookOpen size={28} className="text-primary-600 dark:text-primary-400" />
              </div>
            </div>
          </div>

          <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Deze pagina bestaat niet
          </h1>
          <p className="mx-auto mb-8 max-w-md text-base text-muted-foreground">
            De pagina die je zoekt is verplaatst, verwijderd of heeft nooit bestaan. Ga terug naar
            de homepage.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              className="rounded-full bg-linear-to-br from-primary-400 to-primary-600 px-6 font-semibold text-white shadow-md shadow-primary-500/25 hover:from-primary-500 hover:to-primary-700"
              nativeButton={false}
              render={<Link href="/" />}
            >
              <ArrowLeft size={16} />
              Terug naar home
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Contact opnemen
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
