package com.mirashya.airbnbclone.service;

import com.mirashya.airbnbclone.model.*;
import com.mirashya.airbnbclone.repository.ListingRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

/**
 * Seeds the single reference listing (Mirashya UG10, Candolim) so the API has
 * real data to serve without a separate admin/import step. Photo URLs are
 * neutral placeholders — swap them for real asset URLs when available; the
 * reference site's own photos are proprietary and intentionally not scraped.
 */
@Component
@Profile({"dev", "docker"})
public class DataSeeder implements CommandLineRunner {

    private final ListingRepository listingRepository;

    public DataSeeder(ListingRepository listingRepository) {
        this.listingRepository = listingRepository;
    }

    private static String img(String seed) {
        return "https://picsum.photos/seed/" + seed + "/800/600";
    }

    @Override
    public void run(String... args) {
        if (listingRepository.existsById("mirashya-ug10")) return;

        Listing listing = new Listing();
        listing.setId("mirashya-ug10");
        listing.setTitle("Romantic Jacuzzi 1BHK Candolim | Mirashya UG10");
        listing.setPropertyType("Entire serviced apartment in Candolim, India");
        listing.setLocation("Candolim, Goa, India");
        listing.setGuests(3);
        listing.setBedrooms(1);
        listing.setBeds(1);
        listing.setBathrooms(1);
        listing.setHeroPhotos(List.of(img("hero-main"), img("hero-2"), img("hero-3"), img("hero-4"), img("hero-5")));
        listing.setGuestFavourite(true);
        listing.setRating(4.95);
        listing.setReviewCount(19);
        listing.setHost(new Host("Mirashya Homes", img("host-avatar"), 2, 1463, 4.68,
                "Born in the 80s", "Where I went to school: NICMAR GOA", 100, "Responds within an hour"));
        listing.setDescription("Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! Stay in this cozy " +
                "1BHK in the heart of Candolim, featuring a private jacuzzi for the perfect unwind. Enjoy " +
                "high-speed WiFi, Smart TV, pet-friendly comfort, and stylish interiors. Just minutes from " +
                "Candolim Beach, popular cafes, restaurants, and nightlife, it's ideal for couples seeking " +
                "romance, relaxation, and a touch of luxury in North Goa.");
        listing.setPricePerStay(new BigDecimal("28499"));
        listing.setCurrency("\u20B9");
        listing.setNights(5);
        listing.setCheckIn(LocalDate.of(2026, 10, 18));
        listing.setCheckOut(LocalDate.of(2026, 10, 23));
        listing.setDefaultGuests(2);
        listing.setFreeCancellationDate("17 October");
        listing.setTotalAmenityCount(50);
        listing.setNeighbourhood("Candolim, Goa, India");
        listing.setNeighbourhoodBlurb("Located in the heart of Candolim, Amor de Goa offers a peaceful stay " +
                "with easy access to beaches, cafes, and popular attractions.");
        listing.setCancellationPolicy(List.of(
                "Free cancellation before 17 October.",
                "Cancel before check-in on 18 October for a partial refund."));
        listing.setHouseRules(List.of("Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"));
        listing.setSafety(List.of("Carbon monoxide alarm not reported", "Smoke alarm not reported",
                "Exterior security cameras on property"));

        addPhotoCategory(listing, "living-room-1", "Living room 1", "Sofa \u00b7 Air conditioning \u00b7 Ceiling fan \u00b7 TV",
                List.of(img("lr1"), img("lr1-a"), img("lr1-b")));
        addPhotoCategory(listing, "living-room-2", "Living room 2", "Ceiling fan \u00b7 Hot tub",
                List.of(img("lr2"), img("lr2-a"), img("lr2-b"), img("lr2-c")));
        addPhotoCategory(listing, "full-kitchen", "Full kitchen",
                "Freezer \u00b7 Fridge \u00b7 Blender \u00b7 Cooker \u00b7 Cooking basics \u00b7 Kettle \u00b7 Microwave \u00b7 Toaster \u00b7 Wine glasses \u00b7 Coffee \u00b7 Crockery and cutlery",
                List.of(img("kitchen"), img("kitchen-a")));
        addPhotoCategory(listing, "bedroom", "Bedroom",
                "Double bed \u00b7 Air conditioning \u00b7 Bed linen \u00b7 Ceiling fan \u00b7 Clothes storage \u00b7 Cot \u00b7 Hangers \u00b7 Iron \u00b7 Room-darkening blinds \u00b7 Wifi",
                List.of(img("bed"), img("bed-a"), img("bed-b")));
        addPhotoCategory(listing, "full-bathroom", "Full bathroom", "Hairdryer \u00b7 Hot water \u00b7 Shampoo \u00b7 Shower gel",
                List.of(img("bath")));
        addPhotoCategory(listing, "gym", "Gym", "Air conditioning \u00b7 Gym \u00b7 Exercise equipment \u00b7 Ceiling fan",
                List.of(img("gym"), img("gym-a"), img("gym-b")));
        addPhotoCategory(listing, "exterior", "Exterior", "", List.of(img("ext"), img("ext-a")));
        addPhotoCategory(listing, "pool", "Pool", "Pool", List.of(img("pool"), img("pool-a")));
        addPhotoCategory(listing, "additional", "Additional photos", "", List.of(img("extra"), img("extra-a"), img("extra-b")));

        addReview(listing, "r1", "Amit", "2 months on Airbnb", "1 week ago", 5,
                "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.");
        addReview(listing, "r2", "Aheesh", "3 years on Airbnb", "2 weeks ago", 5,
                "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the " +
                        "photos. The host was very responsive and helpful throughout our stay.");
        addReview(listing, "r3", "Samiksha", "8 months on Airbnb", "May 2026", 5, "the host nitish was really great help");
        addReview(listing, "r4", "Vedant", "4 years on Airbnb", "May 2026", 5,
                "We had an amazing stay at this property in Goa! The entire home was spotless and " +
                        "exceptionally well-maintained.");
        addReview(listing, "r5", "Vaibhav S", "3 years on Airbnb", "May 2026", 5,
                "Great great experience living out there, can't expect more, will always look for it in the future.");
        addReview(listing, "r6", "Mohd", "5 years on Airbnb", "May 2026", 4, "Great place. Exactly as described in the listing.");

        addAmenity(listing, "kitchen", "Kitchen", true);
        addAmenity(listing, "wifi", "Wifi", true);
        addAmenity(listing, "desk", "Dedicated workspace", true);
        addAmenity(listing, "car", "Free parking on premises", true);
        addAmenity(listing, "pool", "Pool", true);
        addAmenity(listing, "hottub", "Hot tub", true);
        addAmenity(listing, "paw", "Pets allowed", true);
        addAmenity(listing, "camera", "Exterior security cameras on property", true);
        addAmenity(listing, "co-alarm", "Carbon monoxide alarm", false);
        addAmenity(listing, "smoke-alarm", "Smoke alarm", false);

        addRatingCategory(listing, "Cleanliness", 5.0);
        addRatingCategory(listing, "Accuracy", 5.0);
        addRatingCategory(listing, "Check-in", 5.0);
        addRatingCategory(listing, "Communication", 5.0);
        addRatingCategory(listing, "Location", 4.8);
        addRatingCategory(listing, "Value", 4.8);

        addReviewTag(listing, "Comfort", 6);
        addReviewTag(listing, "Accuracy", 5);
        addReviewTag(listing, "Hot tub", 5);
        addReviewTag(listing, "Condition", 4);
        addReviewTag(listing, "Hospitality", 8);
        addReviewTag(listing, "Cleanliness", 4);
        addReviewTag(listing, "Amenities", 2);

        addCoHost(listing, "Sharath");
        addCoHost(listing, "Aman Dev Pahwa");
        addCoHost(listing, "Maria Karen Priyanka");
        addCoHost(listing, "Simran");
        addCoHost(listing, "Pallavi");
        addCoHost(listing, "Sanyukta");
        addCoHost(listing, "Shruti");
        addCoHost(listing, "Amisha");

        addSleepArea(listing, "Bedroom", "1 double bed");
        addSleepArea(listing, "Living room", "1 sofa");

        addAmenityHighlight(listing, "sun-lounger", "Outdoor entertainment", "The pool and alfresco dining are great for trips.");
        addAmenityHighlight(listing, "snowflake", "Designed for staying cool", "Beat the heat with the A/C and ceiling fan.");
        addAmenityHighlight(listing, "key", "Self check-in", "You can check in with the building staff.");

        for (int i = 0; i < 5; i++) {
            NearbyStay stay = new NearbyStay();
            stay.setImageUrl(img("nearby" + i));
            stay.setTitle("Stay nearby");
            stay.setListing(listing);
            listing.getNearbyStays().add(stay);
        }

        listingRepository.save(listing);
    }

    private void addPhotoCategory(Listing listing, String key, String label, String subtitle, List<String> photos) {
        PhotoCategory c = new PhotoCategory();
        c.setCategoryKey(key);
        c.setLabel(label);
        c.setSubtitle(subtitle);
        c.setCoverUrl(photos.get(0));
        c.setPhotos(photos);
        c.setListing(listing);
        listing.getPhotoCategories().add(c);
    }

    private void addReview(Listing listing, String key, String name, String tenure, String date, int rating, String text) {
        Review r = new Review();
        r.setReviewKey(key);
        r.setName(name);
        r.setAvatarUrl(img("rev-" + key));
        r.setTenure(tenure);
        r.setDate(date);
        r.setRating(rating);
        r.setText(text);
        r.setListing(listing);
        listing.getReviews().add(r);
    }

    private void addAmenity(Listing listing, String icon, String label, boolean available) {
        Amenity a = new Amenity();
        a.setIcon(icon);
        a.setLabel(label);
        a.setAvailable(available);
        a.setListing(listing);
        listing.getAmenities().add(a);
    }

    private void addRatingCategory(Listing listing, String label, double score) {
        RatingCategory r = new RatingCategory();
        r.setLabel(label);
        r.setScore(score);
        r.setListing(listing);
        listing.getRatingCategories().add(r);
    }

    private void addReviewTag(Listing listing, String label, int count) {
        ReviewTag t = new ReviewTag();
        t.setLabel(label);
        t.setCount(count);
        t.setListing(listing);
        listing.getReviewTags().add(t);
    }

    private void addCoHost(Listing listing, String name) {
        CoHost c = new CoHost();
        c.setName(name);
        c.setAvatarUrl(img("co-" + name.toLowerCase().replace(" ", "-")));
        c.setListing(listing);
        listing.getCoHosts().add(c);
    }

    private void addSleepArea(Listing listing, String label, String detail) {
        SleepArea s = new SleepArea();
        s.setLabel(label);
        s.setDetail(detail);
        s.setImageUrl(img("sleep-" + label.toLowerCase().replace(" ", "-")));
        s.setListing(listing);
        listing.getSleepAreas().add(s);
    }

    private void addAmenityHighlight(Listing listing, String icon, String title, String description) {
        AmenityHighlight h = new AmenityHighlight();
        h.setIcon(icon);
        h.setTitle(title);
        h.setDescription(description);
        h.setListing(listing);
        listing.getAmenityHighlights().add(h);
    }
}
