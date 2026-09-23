package com.mirashya.airbnbclone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "rating_categories")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RatingCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pk;

    private String label;
    private double score;

    @ManyToOne
    @JoinColumn(name = "listing_id")
    private Listing listing;
}
