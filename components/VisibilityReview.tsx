                <input
                  id="review-phone"
                  name="phone"
                  type="tel"
                  maxLength={40}
                  autoComplete="tel"
                  placeholder="(775) 555-1234"
                  className={inputClass}
                />
              </div>

              <div
                className="
                  sm:col-span-2
                "
              >
                <label
                  htmlFor="review-website"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  Website or Social Media Page (optional)
                </label>

                <input
                  id="review-website"
                  name="website"
                  type="text"
                  maxLength={300}
                  placeholder="yourbusiness.com or a social media page"
                  className={inputClass}
                />

                <p
                  className="
                    mt-2
                    text-xs text-slate-400
                  "
                >
                  No website? That&apos;s okay.
                  You can leave this blank.
                </p>
              </div>

              <div
                className="
                  sm:col-span-2
                "
              >
                <label
                  htmlFor="review-message"
                  className="
                    block
                    mb-2
                    text-sm font-medium text-slate-300
                  "
                >
                  What would you like to improve? (optional)
                </label>

                <textarea
                  id="review-message"
                  name="message"
                  rows={4}
                  maxLength={5000}
                  placeholder="Tell us about your business or anything you're concerned about online..."
                  className={inputClass}
                />
              </div>

              <div
                className="
                  sm:col-span-2
                "
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    flex
                    w-full
                    px-7 py-4
                    font-semibold text-white
                    bg-[#C9784A]
                    rounded-md
                    items-center justify-center gap-2 transition hover:bg-[#D8895B] disabled:cursor-not-allowed disabled:opacity-60
                  "
                >
                  {isSubmitting
                    ? "Sending Your Request..."
                    : "Request My Free Visibility Review"}

                  {!isSubmitting && (
                    <ArrowRight size={18} />
                  )}
                </button>

                <p
                  className="
                    mt-4
                    text-center text-xs leading-6 text-slate-400
                  "
                >
                  We&apos;ll use the information you
                  provide only to respond to your request.
                  No obligation.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Direct Contact */}

        <p
          className="
            mt-8
            text-center text-sm text-slate-400
          "
        >
          Prefer email?{" "}
          <a
            href="mailto:getrekode@gmail.com"
            className="
              font-semibold text-[#C9784A]
              hover:text-[#E5A77C]
            "
          >
            getrekode@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
