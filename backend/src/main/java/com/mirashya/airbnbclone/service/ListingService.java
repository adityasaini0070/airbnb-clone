package com.mirashya.airbnbclone.service;

import com.mirashya.airbnbclone.dto.ListingDto;
import com.mirashya.airbnbclone.model.Listing;
import com.mirashya.airbnbclone.repository.ListingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ListingService {

    private final ListingRepository listingRepository;

    public ListingService(ListingRepository listingRepository) {
        this.listingRepository = listingRepository;
    }

    public Optional<ListingDto> getListing(String id) {
        return listingRepository.findById(id).map(ListingMapper::toDto);
    }

    public List<ListingDto> getAllListings() {
        return listingRepository.findAll().stream().map(ListingMapper::toDto).toList();
    }

    public Listing save(Listing listing) {
        return listingRepository.save(listing);
    }
}
