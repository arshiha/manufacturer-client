import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Summary = () => {
  return (
    <section className="my-12">
      <h1 className="text-center font-semibold text-4xl text-primary my-24">
        Successful Business Summary
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center  ">
        <div className="ard lg:max-w-lg bg-base-100 shadow-xl text-center py-3 ">
          <h1 className="text-5xl font-bold">
            <CountUp start={0} end={900}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <span className="text-lime-600"> K</span>
          </h1>
          <h2 className="text-3xl font-bold text-orange-500">Projects</h2>
        </div>
        <div className="ard lg:max-w-lg bg-base-100 shadow-xl text-center py-3">
          <h1 className="text-5xl font-bold">
            <CountUp start={0} end={120}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <span className="text-yellow-400"> M+</span>
          </h1>
          <h2 className="text-3xl font-bold text-purple-400">Customer</h2>
        </div>
        <div className="ard lg:max-w-lg bg-base-100 shadow-xl text-center py-3">
          <h1 className="text-5xl font-bold">
            <CountUp start={0} end={700}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <span className="text-pink-400"> B+</span>
          </h1>
          <h2 className="text-3xl font-bold text-blue-500">Review</h2>
        </div>
        <div className="ard lg:max-w-lg bg-base-100 shadow-xl text-center py-3">
          <h1 className="text-5xl font-bold">
            <CountUp start={0} end={600}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <span className="text-green-500"> K</span>
          </h1>
          <h2 className="text-3xl font-bold text-teal-500">Clients</h2>
        </div>
      </div>
    </section>
  );
};

export default Summary;
