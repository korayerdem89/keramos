import Image from "next/image";
import Link from "next/link";

import blogsData from "../../data/blogs";
import BlogPagination from "./BlogPagination";

const Blog1 = () => {
  return (
    <>
      <div className="tabs -pills-3 pt-30 js-tabs">
        <div className="row y-gap-30 pt-30">
          {blogsData.slice(0, 9).map((item) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <Link href={`/blog-details/${item.id}`} className="blogCard -type-1 d-block ">
                <div className="blogCard__image">
                  <div className="rounded-8">
                    <Image
                      width={400}
                      height={300}
                      className="cover w-100 img-fluid"
                      src={item.img}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="pt-20">
                  <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
                  <div className="text-light-1 text-15 lh-14 mt-5">{item.date}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* End .row */}

        <BlogPagination />
      </div>
    </>
  );
};

export default Blog1;
