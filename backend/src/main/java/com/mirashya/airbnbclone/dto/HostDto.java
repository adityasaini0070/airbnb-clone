package com.mirashya.airbnbclone.dto;

public record HostDto(
        String name,
        String avatarUrl,
        int yearsHosting,
        int reviewCount,
        double rating,
        String bornDecade,
        String school,
        int responseRate,
        String responseTime
) {}
