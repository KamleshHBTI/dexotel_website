import React from 'react';
import Image from 'next/image';

const BlogSection: React.FC = () => {
  return (
    <section className="bg-white-0 pb-10 pt-20 lg:pb-20 lg:pt-[50px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white">
                Our Recent News
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 w-full">
              <div className="mb-8 overflow-hidden rounded">
                <Image
                  src="/images/blogs/blog-01/image-01.jpg"
                  alt="image"
                  className="w-full"
                  width={500}
                  height={300}
                />
              </div>
              <div>
                <span className="mb-3 inline-block rounded bg-primary px-0 py-1 text-center text-xs font-semibold leading-loose">
                  Dec 22, 2023
                </span>
                <h3>
                  <a
                    href="#"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl dark:text-white"
                  >
                    Meet AutoManage, the best AI management tools
                  </a>
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 w-full">
              <div className="mb-8 overflow-hidden rounded">
                <Image
                  src="/images/blogs/blog-01/image-02.jpg"
                  alt="image"
                  className="w-full"
                  width={500}
                  height={300}
                />
              </div>
              <div>
                <span className="mb-3 inline-block rounded bg-primary px-0 py-1 text-center text-xs font-semibold leading-loose">
                  Mar 15, 2023
                </span>
                <h3>
                  <a
                    href="#"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl dark:text-white"
                  >
                    How to earn more money as a wellness coach
                  </a>
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 w-full">
              <div className="mb-8 overflow-hidden rounded">
                <Image
                  src="/images/blogs/blog-01/image-03.jpg"
                  alt="image"
                  className="w-full"
                  width={500}
                  height={300}
                />
              </div>
              <div>
                <span className="mb-3 inline-block rounded bg-primary px-0 py-1 text-center text-xs font-semibold leading-loose">
                  Jan 05, 2023
                </span>
                <h3>
                  <a
                    href="#"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl dark:text-white"
                  >
                    The no-fuss guide to upselling and cross selling
                  </a>
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
