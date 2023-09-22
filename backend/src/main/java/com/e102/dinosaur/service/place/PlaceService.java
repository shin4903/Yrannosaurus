package com.e102.dinosaur.service.place;

import com.e102.dinosaur.controller.place.request.PlaceRequest;
import com.e102.dinosaur.domain.place.Place;
import com.e102.dinosaur.domain.place.PlaceRepository;
import com.e102.dinosaur.service.place.response.PlaceResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class PlaceService {

    private final PlaceRepository placeRepository;

    public PlaceResponse savePlace(PlaceRequest placeRequest) {
        Place place = placeRequest.toEntity();
        placeRepository.save(place);
        return PlaceResponse.of(place);
    }

    public List<PlaceResponse> findPlaces() {
        return placeRepository.findAll().stream()
                .map(PlaceResponse::of)
                .toList();
    }
}