package com.mirashya.airbnbclone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "photo_categories")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PhotoCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pk;

    private String categoryKey;
    private String label;

    @Column(length = 1000)
    private String subtitle;

    @Column(length = 1000)
    private String coverUrl;

    @ElementCollection
    @CollectionTable(name = "photo_category_photos", joinColumns = @JoinColumn(name = "category_pk"))
    @Column(name = "url", length = 1000)
    @OrderColumn(name = "position")
    private List<String> photos = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "listing_id")
    private Listing listing;
}
