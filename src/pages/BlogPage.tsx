import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
