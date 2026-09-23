package com.mirashya.airbnbclone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "review_tags")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pk;

    private String label;
    private int count;

    @ManyToOne
    @JoinColumn(name = "listing_id")
    private Listing listing;
}
