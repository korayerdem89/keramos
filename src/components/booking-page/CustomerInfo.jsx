"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const CustomerInfo = () => {
  const t = useTranslations("Reservation");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (startDate) {
      const start = new Date(startDate);
      const end = new Date(start.getTime() + 6 * 24 * 60 * 60 * 1000); // 7 gün sonra (6 gün ekliyoruz çünkü başlangıç günü dahil)
      setEndDate(end.toISOString().split("T")[0]);
    }
  }, [startDate]);

  async function onSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formJson),
      });

      if (response.ok) {
        alert(`${t("reservationsubmitted")}`);
        event.target.reset();
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="d-flex items-center justify-center">
      <div className="col-xl-7 col-lg-8 mt-30">
        <h2 className="text-22 fw-500 mt-40 md:mt-24">{t("formtitle")}</h2>
        <form onSubmit={onSubmit}>
          <div className="row x-gap-20 y-gap-20 pt-20">
            <div className="col-12">
              <div className="form-input">
                <input type="text" name="fullName" required />
                <label className="lh-1 text-16 text-light-1">{t("formfullname")}</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-input">
                <input type="email" name="email" required />
                <label className="lh-1 text-16 text-light-1">Email</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-input">
                <input type="tel" name="phoneNumber" required />
                <label className="lh-1 text-16 text-light-1">{t("formphonenumber")}</label>
              </div>
            </div>

            {/* Yeni eklenen tarih aralığı inputları */}
            <div className="col-md-6">
              <div className="form-input">
                <input
                  type="date"
                  name="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
                <label className="lh-1 text-16 text-light-1">{t("formstartdate")}</label>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-input">
                <input type="date" name="endDate" value={endDate} disabled />
                <label className="lh-1 text-16 text-light-1">{t("formenddate")}</label>
              </div>
            </div>

            <div className="col-12">
              <div className="form-input">
                <textarea required name="address" rows={4} defaultValue={""} />
                <label className="lh-1 text-16 text-light-1">{t("formaddress")}</label>
              </div>
            </div>

            <div className="col-12">
              <div className="form-input">
                <textarea rows={6} name="requests" defaultValue={""} />
                <label className="lh-1 text-16 text-light-1">{t("formrequests")}</label>
              </div>
            </div>
          </div>

          <div className="justify-end pt-30 justify-center d-flex">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button h-60 px-70 -dark-1 bg-blue-1 text-white"
            >
              {t("formsubmitbutton")} <div className="icon-arrow-top-right ml-15" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerInfo;
