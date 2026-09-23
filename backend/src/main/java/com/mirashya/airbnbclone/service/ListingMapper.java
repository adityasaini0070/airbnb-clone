package com.mirashya.airbnbclone.service;

import com.mirashya.airbnbclone.dto.*;
import com.mirashya.airbnbclone.model.*;

import java.util.List;

public final class ListingMapper {

    private ListingMapper() {}

    public static ListingDto toDto(Listing l) {
        return new ListingDto(
                l.getId(),
                l.getTitle(),
                l.getPropertyType(),
                l.getLocation(),
                l.getGuests(),
                l.getBedrooms(),
                l.getBeds(),
                l.getBathrooms(),
                l.getHeroPhotos(),
                l.getPhotoCategories().stream().map(ListingMapper::toDto).toList(),
                l.isGuestFavourite(),
                l.getRating(),
                l.getReviewCount(),
                toDto(l.getHost()),
                l.getCoHosts().stream().map(c -> new CoHostDto(c.getName(), c.getAvatarUrl())).toList(),
                l.getAmenityHighlights().stream()
                        .map(h -> new AmenityHighlightDto(h.getIcon(), h.getTitle(), h.getDescription())).toList(),
                l.getDescription(),
                l.getSleepAreas().stream()
                        .map(s -> new SleepAreaDto(s.getImageUrl(), s.getLabel(), s.getDetail())).toList(),
                l.getAmenities().stream()
                        .map(a -> new AmenityDto(a.getIcon(), a.getLabel(), a.isAvailable())).toList(),
                l.getTotalAmenityCount(),
                l.getPricePerStay(),
                l.getCurrency(),
                l.getNights(),
                l.getCheckIn(),
                l.getCheckOut(),
                l.getDefaultGuests(),
                l.getFreeCancellationDate(),
                l.getRatingCategories().stream()
                        .map(r -> new RatingCategoryDto(r.getLabel(), r.getScore())).toList(),
                l.getReviewTags().stream()
                        .map(t -> new ReviewTagDto(t.getLabel(), t.getCount())).toList(),
                l.getReviews().stream().map(ListingMapper::toDto).toList(),
                l.getNeighbourhood(),
                l.getNeighbourhoodBlurb(),
                l.getCancellationPolicy(),
                l.getHouseRules(),
                l.getSafety(),
                l.getNearbyStays().stream()
                        .map(n -> new NearbyStayDto(n.getImageUrl(), n.getTitle())).toList()
        );
    }

    private static PhotoCategoryDto toDto(PhotoCategory c) {
        return new PhotoCategoryDto(c.getCategoryKey(), c.getLabel(), c.getSubtitle(), c.getCoverUrl(), c.getPhotos());
    }

    private static ReviewDto toDto(Review r) {
        return new ReviewDto(r.getReviewKey(), r.getName(), r.getAvatarUrl(), r.getTenure(), r.getDate(), r.getRating(), r.getText());
    }

    private static HostDto toDto(Host h) {
        return new HostDto(h.getName(), h.getAvatarUrl(), h.getYearsHosting(), h.getReviewCount(), h.getRating(),
                h.getBornDecade(), h.getSchool(), h.getResponseRate(), h.getResponseTime());
    }
}
