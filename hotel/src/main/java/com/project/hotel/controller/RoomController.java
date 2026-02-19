package com.project.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.hotel.entity.Room;
import com.project.hotel.repository.RoomRepository;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "http://localhost:3000")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    // ✅ Get all rooms
    @GetMapping
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    // ✅ Get rooms by location
    @GetMapping("/location/{city}")
    public List<Room> getRoomsByLocation(@PathVariable String city) {
        return roomRepository.findByLocation(city);
    }
}
