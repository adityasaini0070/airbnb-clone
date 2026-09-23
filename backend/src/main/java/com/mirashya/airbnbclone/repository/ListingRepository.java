package com.mirashya.airbnbclone.repository;

import com.mirashya.airbnbclone.model.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListingRepository extends JpaRepository<Listing, String> {
}
