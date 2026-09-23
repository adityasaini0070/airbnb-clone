package com.mirashya.airbnbclone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "reviews")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pk;

    private String reviewKey;
    private String name;
    private String avatarUrl;
    private String tenure;
    private String date;
    private int rating;

    @Lob
    private String text;

    @ManyToOne
    @JoinColumn(name = "listing_id")
    private Listing listing;
}
