package com.mirashya.airbnbclone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "listings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Listing {

    @Id
    private String id;

    private String title;
    private String propertyType;
    private String location;
    private int guests;
    private int bedrooms;
    private int beds;
    private int bathrooms;

    @ElementCollection
    @CollectionTable(name = "listing_hero_photos", joinColumns = @JoinColumn(name = "listing_id"))
    @Column(name = "url", length = 1000)
    @OrderColumn(name = "position")
    private List<String> heroPhotos = new ArrayList<>();

    private boolean guestFavourite;
    private double rating;
    private int reviewCount;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "name", column = @Column(name = "host_name")),
            @AttributeOverride(name = "avatarUrl", column = @Column(name = "host_avatar_url")),
            @AttributeOverride(name = "yearsHosting", column = @Column(name = "host_years_hosting")),
            @AttributeOverride(name = "reviewCount", column = @Column(name = "host_review_count")),
            @AttributeOverride(name = "rating", column = @Column(name = "host_rating")),
            @AttributeOverride(name = "bornDecade", column = @Column(name = "host_born_decade")),
            @AttributeOverride(name = "school", column = @Column(name = "host_school")),
            @AttributeOverride(name = "responseRate", column = @Column(name = "host_response_rate")),
            @AttributeOverride(name = "responseTime", column = @Column(name = "host_response_time")),
    })
    private Host host;

    @Lob
    private String description;

    private BigDecimal pricePerStay;
    private String currency;
    private int nights;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private int defaultGuests;
    private String freeCancellationDate;
    private int totalAmenityCount;

    private String neighbourhood;

    @Lob
    private String neighbourhoodBlurb;

    @ElementCollection
    @CollectionTable(name = "listing_cancellation_policy", joinColumns = @JoinColumn(name = "listing_id"))
    @Column(name = "line", length = 500)
    @OrderColumn(name = "position")
    private List<String> cancellationPolicy = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "listing_house_rules", joinColumns = @JoinColumn(name = "listing_id"))
    @Column(name = "line", length = 500)
    @OrderColumn(name = "position")
    private List<String> houseRules = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "listing_safety", joinColumns = @JoinColumn(name = "listing_id"))
    @Column(name = "line", length = 500)
    @OrderColumn(name = "position")
    private List<String> safety = new ArrayList<>();

    @OneToMany(mappedBy = "listing", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderColumn(name = "position")
    private List<PhotoCategory> photoCategories = new ArrayList<>();

    @OneToMany(mappedBy = "listing", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderColumn(name = "position")
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "listing", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderColumn(name = "position")
    private List<Amenity> amenities = new ArrayList<>();

    @OneToMany(mappedBy = "listing", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderColumn(name = "position")
    private List<RatingCategory> ratingCategories = new ArrayList<>();

    @OneToMany(mappedBy = "listing", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderColumn(name = "position")
    private List<ReviewTag> reviewTags = new ArrayList<>();

    @OneToMany(mappedBy = "listing", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderColumn(name = "position")
    private List<CoHost> coHosts = new ArrayList<>();

    @OneToMany(mappedBy = "listing", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderColumn(name = "position")
    private List<SleepArea> sleepAreas = new ArrayList<>();

    @OneToMany(mappedBy = "listing", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderColumn(name = "position")
    private List<AmenityHighlight> amenityHighlights = new ArrayList<>();

    @OneToMany(mappedBy = "listing", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderColumn(name = "position")
    private List<NearbyStay> nearbyStays = new ArrayList<>();
}
