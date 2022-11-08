import React from "react";
import { BsBarChartLine, BsFunnel } from "react-icons/bs";
import { HiArrowUpTray } from "react-icons/hi2";

const ServicesSec = () => {
  return (
    <div className=" w-full py-28 px-48">
      <main>
        <div className="grid grid-cols-2">
          <div>
            <h4 className="text-xl">Services</h4>
            <h2 className="text-5xl font-semibold pt-5">
              Build Integrated Technology Platform
            </h2>
          </div>
          <div className="flow-root">
            <div className="-my-8 divide-y divide-gray-100">
              <details className="group py-8" open>
                <summary className="flex cursor-pointer items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    How to try the demo version
                  </h2>

                  <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group py-8">
                <summary className="flex cursor-pointer items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    Can I have an automate backup?
                  </h2>

                  <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
              <details className="group py-8">
                <summary className="flex cursor-pointer items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    Do you manage cloud service?
                  </h2>

                  <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  hic veritatis molestias culpa in, recusandae laboriosam neque
                  aliquid libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 pt-20">
          <div>
            <BsBarChartLine size={70} className="bg-[#395B64] text-white p-5" />
            <h3 className="text-xl py-5">Identity</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              rerum.
            </p>
          </div>
          <div>
            <BsFunnel size={70} className="bg-[#395B64] text-white p-5" />
            <h3 className="text-xl py-5">Observation</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, quo!
            </p>
          </div>
          <div>
            <HiArrowUpTray size={70} className="bg-[#395B64] text-white p-5" />
            <h3 className="text-xl py-5">Implement</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              nemo!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesSec;
