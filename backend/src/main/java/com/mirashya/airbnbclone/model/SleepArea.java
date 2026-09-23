package com.mirashya.airbnbclone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "sleep_areas")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SleepArea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pk;

    @Column(length = 1000)
    private String imageUrl;
    private String label;
    private String detail;

    @ManyToOne
    @JoinColumn(name = "listing_id")
    private Listing listing;
}
