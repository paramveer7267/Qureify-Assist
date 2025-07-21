import { testimonials } from "../constants/index";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10">
        <TitleHeader
          title="Testimonials"
          sub="⭐️ Doctors Feedback"
        />

        <div className="mt-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 2000 }}
            loop={true}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <GlowCard card={testimonial} index={index}>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.imgPath}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-white-50">{testimonial.mentions}</p>
                    </div>
                  </div>
                </GlowCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
