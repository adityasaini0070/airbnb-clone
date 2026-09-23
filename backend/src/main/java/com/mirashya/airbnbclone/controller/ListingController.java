package com.mirashya.airbnbclone.controller;

import com.mirashya.airbnbclone.dto.ListingDto;
import com.mirashya.airbnbclone.service.ListingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/listings")
public class ListingController {

    private final ListingService listingService;

    public ListingController(ListingService listingService) {
        this.listingService = listingService;
    }

    @GetMapping
    public List<ListingDto> getAll() {
        return listingService.getAllListings();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ListingDto> getOne(@PathVariable String id) {
        return listingService.getListing(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Simple availability check against the listing's single seeded booking
     * window. In a real system this would query a bookings table; kept
     * minimal here since the assignment's focus is the listing page itself.
     */
    @GetMapping("/{id}/availability")
    public ResponseEntity<Map<String, Object>> checkAvailability(
            @PathVariable String id,
            @RequestParam("checkIn") String checkInStr,
            @RequestParam("checkOut") String checkOutStr) {
        return listingService.getListing(id)
                .map(listing -> {
                    LocalDate requestedIn = LocalDate.parse(checkInStr);
                    LocalDate requestedOut = LocalDate.parse(checkOutStr);
                    boolean overlapsSeededStay = !(requestedOut.isBefore(listing.checkIn())
                            || requestedIn.isAfter(listing.checkOut()));
                    return ResponseEntity.ok(Map.<String, Object>of(
                            "available", !overlapsSeededStay,
                            "nights", java.time.temporal.ChronoUnit.DAYS.between(requestedIn, requestedOut)
                    ));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
