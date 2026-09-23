package com.mirashya.airbnbclone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "nearby_stays")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NearbyStay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pk;

    @Column(length = 1000)
    private String imageUrl;
    private String title;

    @ManyToOne
    @JoinColumn(name = "listing_id")
    private Listing listing;
}
