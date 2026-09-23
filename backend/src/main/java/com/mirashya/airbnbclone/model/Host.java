package com.mirashya.airbnbclone.model;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Host {
    private String name;
    private String avatarUrl;
    private int yearsHosting;
    private int reviewCount;
    private double rating;
    private String bornDecade;
    private String school;
    private int responseRate;
    private String responseTime;
}
