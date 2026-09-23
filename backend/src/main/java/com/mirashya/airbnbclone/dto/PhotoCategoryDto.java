package com.mirashya.airbnbclone.dto;

import java.util.List;

public record PhotoCategoryDto(String id, String label, String subtitle, String coverUrl, List<String> photos) {}
