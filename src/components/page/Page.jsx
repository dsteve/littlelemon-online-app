import "@/index.css";

import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

function Page(props) {
  return (
    <div className="grid grid-cols-12 gap-2 min-h-screen font-(--font-karla)">
      <div className="col-span-12 col-start-1 flex flex-col">
        <Header />
        <main className="flex-1 content-center">
            {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
